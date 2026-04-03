import { motion } from 'motion/react';
import { useReveal } from '../hooks/useReveal';
import SpotlightCard from '../components/SpotlightCard';
import Sparkles from '../components/Sparkles';
import TestimonialMarquee from '../components/TestimonialMarquee';

const team = [
  {
    name: 'Dr. Alyssa',
    title: 'Chief Shock Officer',
    bio: 'Former behavioral neuroscientist. Left academia when she realized mild electrocution was more effective than peer review.',
  },
  {
    name: 'Caedmon Tosh',
    title: 'Lead Hardware Engineer',
    bio: 'Designed military-grade enclosures for 10 years. Now applies that expertise to ensuring you can\'t take your phone case off at 2am.',
  },
  {
    name: 'Tomi Okelana',
    title: 'Head of Product',
    bio: 'Has a 23-minute daily screen time. Not because of ZipIt, he\'s just like that. Everyone finds it unsettling.',
  },
  {
    name: 'Tenzin',
    title: 'UX Researcher',
    bio: 'Runs all user testing sessions. Watches people get shocked for a living and calls it "qualitative data collection."',
  },
  {
    name: 'Vlad',
    title: 'Firmware Engineer',
    bio: 'Wrote the code that decides when you get zapped. Sleeps soundly at night knowing his work improves lives through minor suffering.',
  },
];

const values = [
  { title: 'Pain is Progress', desc: 'Every micro-shock is a step toward freedom. We didn\'t invent aversion therapy. We just made it portable.' },
  { title: 'No Refunds', desc: 'Not because we\'re greedy. Because the case is screwed on and you can\'t return what you can\'t remove.' },
  { title: 'Every Shock is a Lesson', desc: 'Our data shows the average user needs 47 shocks before behavioral change. Shock 48 is where the magic happens.' },
];

export default function AboutPage() {
  const heroRef = useReveal({ threshold: 0.1 });
  const missionRef = useReveal({ threshold: 0.15 });
  const teamRef = useReveal({ threshold: 0.1 });
  const valuesRef = useReveal({ threshold: 0.1 });

  return (
    <main style={{ minHeight: '100vh', background: '#000', paddingTop: 52 }}>
      {/* Hero with sparkles */}
      <section ref={heroRef} style={{
        padding: 'clamp(6rem, 14vh, 10rem) clamp(1.5rem, 5vw, 4rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Sparkles particleDensity={50} speed={0.15} particleColor="rgba(252,202,3,0.6)" />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>About</p>
          <h1 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
          }}>We believe in accountability<br />through mild electrocution.</h1>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} style={{
        padding: 'clamp(3rem, 8vh, 6rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: 720,
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p className="reveal" style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
          color: 'var(--color-gray-light)',
          lineHeight: 1.8,
        }}>
          Where conventional app-blocking solutions politely ask you to reconsider your life choices with a gentle overlay screen (which you dismiss faster than a terms-of-service agreement), ZipIt introduces a Pavlovian consequence. It's the difference between a sticky note that says "don't eat the cake" and a very small, very petty security guard who flicks your hand every time you reach for it.
        </p>
        <motion.div
          className="reveal"
          style={{
            marginTop: '3rem',
            padding: '2rem',
            borderLeft: '3px solid var(--color-accent)',
            textAlign: 'left',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
          }}>"Tactile mindfulness reinforcement."</p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--color-gray-dark)',
            marginTop: '0.75rem',
          }}>What we call it in marketing materials so we don't sound like villains</p>
        </motion.div>

        {/* Research section */}
        <div className="reveal" style={{ marginTop: '3rem', textAlign: 'left' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>The science (it's not aversion therapy, we promise)</h3>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-gray-light)',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}>
            Let's be clear: this is absolutely, categorically, definitely not aversion therapy. Aversion therapy involves pairing an unwanted behavior with an unpleasant stimulus to reduce that behavior. ZipIt pairs an unwanted behavior (opening TikTok) with an unpleasant stimulus (a mild shock). Completely different. Our lawyers were very specific about the distinction.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-gray-light)',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}>
            That said, the research behind what we're definitely not doing is quite robust. A 2014 study published in <em>Behaviour Research and Therapy</em> (Vol. 52, pp. 57-63) demonstrated that immediate tactile feedback significantly outperforms delayed cognitive interventions for habit modification. Participants who received real-time physical cues showed a 73% greater reduction in target behaviors compared to those who received screen-based reminders.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-gray-light)',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}>
            Bouton's research on extinction and relapse (2014, <em>Current Directions in Psychological Science</em>, 23(4), 256-260) shows that context-dependent conditioning is the most durable form of behavioral change. Translation: your brain learns faster when the consequence happens in the exact moment and location of the behavior. Not five minutes later on a summary screen. Not in a weekly report. Right now. In your hand. Where it counts.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-gray)',
            lineHeight: 1.8,
          }}>
            We would also like to cite Skinner's work on operant conditioning (1953), but our legal team says referencing B.F. Skinner in marketing materials "makes us sound like we're building a human Skinner Box." Which we are not. The case is open on one side. That's different.
          </p>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} style={{
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: 1000,
        margin: '0 auto',
      }}>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          textAlign: 'center',
          marginBottom: '3rem',
        }}>The team.</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard style={{ padding: 'clamp(2rem, 4vw, 2.5rem)', height: '100%' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-accent), rgba(252,202,3,0.3))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#000',
                  marginBottom: '1.25rem',
                }}>{member.name[0]}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                }}>{member.name}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  color: 'var(--color-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                }}>{member.title}</p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-gray)',
                  lineHeight: 1.6,
                }}>{member.bio}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} style={{
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        background: '#0c0c10',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            marginBottom: '3rem',
          }}>Our values.</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <SpotlightCard style={{ padding: 'clamp(2rem, 4vw, 2.5rem)', height: '100%' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--color-accent)',
                  }}>{v.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-gray)',
                    lineHeight: 1.6,
                  }}>{v.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialMarquee />
    </main>
  );
}
