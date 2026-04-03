import { useState } from 'react';
import { motion } from 'motion/react';
import { useReveal } from '../hooks/useReveal';
import TiltCard from '../components/TiltCard';
import { forumPosts, type ForumPost } from '../data/forumPosts';

function ForumLikes({ post }: { post: ForumPost }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div style={{
      display: 'flex',
      gap: '1.5rem',
      fontSize: '0.75rem',
      fontFamily: 'var(--font-body)',
      marginTop: 'auto',
      paddingTop: '0.5rem',
    }}>
      <button
        onClick={toggleLike}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: liked ? '#e74c3c' : 'var(--color-gray-dark)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-body)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          transition: 'color 0.2s, transform 0.2s',
        }}
      >
        <motion.span
          animate={liked ? { scale: [1, 1.4, 1] } : {}}
          transition={{ duration: 0.3 }}
        >&#9829;</motion.span>
        {count}
      </button>
      <span style={{ color: 'var(--color-gray-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
        &#128172; {post.replies}
      </span>
    </div>
  );
}

export default function ForumsPage() {
  const heroRef = useReveal({ threshold: 0.2 });

  return (
    <main style={{ minHeight: '100vh', background: '#000', paddingTop: 52 }}>
      {/* Hero */}
      <section ref={heroRef} style={{
        padding: 'clamp(5rem, 12vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        textAlign: 'center',
      }}>
        <p className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          color: 'var(--color-accent)',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}>Community</p>
        <h1 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
        }}>Real people. Real shocks.<br />Real regret.</h1>
        <p className="reveal" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.125rem',
          color: 'var(--color-gray)',
          maxWidth: 520,
          margin: '0 auto',
        }}>See what the community has to say about their journey to digital freedom (and mild discomfort).</p>
      </section>

      {/* Posts grid */}
      <section style={{
        padding: '0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vh, 8rem)',
        maxWidth: 1000,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '1.25rem',
        }}>
          {forumPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%' }}
            >
              <TiltCard style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--color-surface-elevated, #2d2d2f)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}>{post.avatar}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-white)',
                      }}>{post.username}</span>
                      {post.verified && (
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.6rem',
                          color: 'var(--color-accent)',
                          background: 'rgba(252,202,3,0.1)',
                          padding: '0.15rem 0.4rem',
                          borderRadius: 4,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>Verified Shocker</span>
                      )}
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      color: 'var(--color-gray-dark)',
                    }}>{post.timestamp}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}>{post.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-gray)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}>{post.body}</p>

                {/* Footer */}
                <ForumLikes post={post} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
