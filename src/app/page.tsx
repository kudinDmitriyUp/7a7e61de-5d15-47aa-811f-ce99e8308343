"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitAvatars from '@/components/sections/hero/HeroSplitAvatars';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardSeven from '@/components/sections/testimonial/TestimonialCardSeven';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Sparkles, MessageSquare, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="fluid"
      cardStyle="noise"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="CreativeStudio"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitAvatars
          title="Transform Your Brand Into a Market Leader"
          description="We craft bold, creative campaigns that capture hearts, engage minds, and drive measurable results for ambitious brands ready to stand out."
          tag="Creative Marketing Agency"
          tagIcon={Sparkles}
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834164747-os4rfles.jpg",
              alt: "Team member 1"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834165453-2j5fxngc.jpg",
              alt: "Team member 2"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834166277-57lry9ko.jpg",
              alt: "Team member 3"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834167106-u7t8wptz.jpg",
              alt: "Team member 4"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834167842-09utdzyf.jpg",
              alt: "Team member 5"
            }
          ]}
          avatarText="Join 150+ brands we've transformed"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834160306-0bi8ox02.jpg"
          imageAlt="Creative team collaborating on marketing strategy"
          imagePosition="right"
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Creative Strategy Meets Digital Excellence"
          description="We blend strategic thinking with creative excellence to deliver marketing solutions that don't just look beautiful—they drive real business growth. From concept to execution, we're your partners in building brands that resonate."
          tag="Our Approach"
          buttons={[
            {
              text: "Learn More About Us",
              href: "#team"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834161481-0jo2pay9.jpg"
          imageAlt="Modern creative agency workspace with collaborative design"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Process"
          description="We follow a proven methodology to transform ideas into impactful campaigns"
          tag="How We Work"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Strategic Planning",
              description: "Deep dive into your brand, market, and audience to craft a winning strategy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834162296-xvdd71rq.jpg",
              imageAlt: "Strategic planning and research phase"
            },
            {
              id: 2,
              title: "Creative Design",
              description: "Bring your vision to life with stunning visual design and compelling messaging",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834163098-cfiutrdt.jpg",
              imageAlt: "Creative design and brand development"
            },
            {
              id: 3,
              title: "Campaign Execution",
              description: "Launch integrated campaigns across digital and traditional channels",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834163916-jgzz81tb.jpg",
              imageAlt: "Campaign execution and launch phase"
            }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "Discover Our Services",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSeven
          title="What Our Clients Say"
          description="Hear from the brands we've helped transform and grow"
          tag="Client Success Stories"
          textboxLayout="default"
          variant="card"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              companyName: "TechVenture",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834169264-w1vp7xlw.jpg",
              companyLogoAlt: "TechVenture logo",
              quote: "CreativeStudio transformed our brand identity and launched campaigns that tripled our user acquisition. Their strategic approach combined with creative excellence is unmatched.",
              author: "Sarah Chen, CEO TechVenture",
              buttons: [
                {
                  text: "Read Case Study",
                  href: "#"
                }
              ]
            },
            {
              id: "2",
              companyName: "GrowthCo",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834169971-igoij5qg.jpg",
              companyLogoAlt: "GrowthCo logo",
              quote: "Working with this team was a game-changer. They understood our market, delivered innovative campaigns, and most importantly, drove measurable results that exceeded our targets.",
              author: "Michael Rodriguez, Marketing Director GrowthCo",
              buttons: [
                {
                  text: "Read Case Study",
                  href: "#"
                }
              ]
            },
            {
              id: "3",
              companyName: "BrandNova",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834170968-ur41iflq.jpg",
              companyLogoAlt: "BrandNova logo",
              quote: "From strategy to execution, every detail was perfect. Their creative campaigns helped us establish market leadership in a crowded industry.",
              author: "Emma Thompson, CMO BrandNova",
              buttons: [
                {
                  text: "Read Case Study",
                  href: "#"
                }
              ]
            },
            {
              id: "4",
              companyName: "InnovateLabs",
              companyLogo: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834171969-2k45ccnq.jpg",
              companyLogoAlt: "InnovateLabs logo",
              quote: "The team brought fresh perspectives, creative excellence, and strategic depth to every project. Our brand never looked better or performed stronger.",
              author: "James Wilson, VP Product InnovateLabs",
              buttons: [
                {
                  text: "Read Case Study",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Join 150+ innovative companies that transformed their marketing with us"
          tag="Our Clients"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834169264-w1vp7xlw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834169971-igoij5qg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834170968-ur41iflq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834171969-2k45ccnq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834172590-s2tn8acm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834173401-4f2o6ll1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834173975-tg9ury0n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765834174827-18x2ed1z.jpg"
          ]
          speed={50}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about working with our creative team"
          tag="FAQ"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What services do you offer?",
              content: "We provide comprehensive marketing solutions including brand strategy, digital marketing, creative design, campaign development, social media management, and performance analytics. Our services are tailored to each client's unique goals and industry."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. Most campaigns take 4-8 weeks from strategy to launch, while larger initiatives may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
            },
            {
              id: "3",
              title: "Do you work with startups?",
              content: "Absolutely! We love working with startups and have extensive experience helping emerging brands establish market presence, build awareness, and drive growth. We offer flexible packages designed for growing businesses."
            },
            {
              id: "4",
              title: "How do you measure campaign success?",
              content: "We establish clear KPIs and metrics before launching any campaign. We track engagement, conversions, ROI, brand awareness, and other relevant metrics. Monthly reports keep you informed of progress and performance."
            },
            {
              id: "5",
              title: "Can you help with rebranding?",
              content: "Yes! We specialize in brand transformation and rebranding. From strategy and identity design to messaging and launch, we guide you through every step of evolving your brand."
            },
            {
              id: "6",
              title: "What makes your agency different?",
              content: "We combine data-driven strategy with creative excellence. Our team brings together strategists, designers, copywriters, and marketers who collaborate to deliver campaigns that look beautiful and perform exceptionally well."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Transform Your Brand?"
          ctaDescription="Let's discuss how we can help you achieve your marketing goals and create campaigns that drive real results."
          ctaButton={{
            text: "Schedule Your Free Consultation",
            href: "mailto:hello@creativestudio.com"
          }}
          ctaIcon={MessageSquare}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "How should I prepare for our first meeting?",
              content: "Bring clarity on your business goals, target audience, and budget. Share any existing marketing materials, brand guidelines, or competitor examples you admire. The more context you provide, the better we can tailor our approach."
            },
            {
              id: "2",
              title: "What's your typical project pricing?",
              content: "Pricing depends on project scope, complexity, and deliverables. We offer flexible packages for different budgets. During our consultation, we'll discuss your needs and provide transparent pricing for your specific project."
            },
            {
              id: "3",
              title: "Do you offer retainer options?",
              content: "Yes, we offer retainer partnerships for ongoing marketing support. This is perfect for brands that need consistent strategy, execution, and optimization. Let's discuss what works best for your needs."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="CreativeStudio"
          description="Transforming brands through strategic creative excellence. We build campaigns that captivate, engage, and drive measurable growth."
          copyrightText="© 2025 CreativeStudio. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Brand Strategy",
                  href: "about"
                },
                {
                  label: "Digital Marketing",
                  href: "about"
                },
                {
                  label: "Creative Design",
                  href: "about"
                },
                {
                  label: "Campaign Development",
                  href: "about"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Work",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "about"
                },
                {
                  label: "Case Studies",
                  href: "about"
                },
                {
                  label: "Marketing Guide",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}