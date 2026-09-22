"use client";

import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect personal information you provide when booking a ride, creating an account, or contacting us. This includes your name, email address, phone number, pickup and drop-off locations, and payment details. We may also collect device and usage data automatically through cookies and similar technologies. When you use our mobile applications (Customer App or Driver App), we may also collect device identifiers, operating system version, and app usage data to improve performance and troubleshoot issues.",
  },
  {
    title: "Location Data",
    content:
      "Our mobile applications collect and process location data to provide core ride services. The Customer App uses your location to suggest nearby pickup points. The Driver App uses real-time GPS location data to calculate fare distances via the in-app meter, navigate to pickup and drop-off points, and track active trips. Location data is collected only while the app is in use and an active booking is in progress. Location data is shared with our dispatch system to coordinate ride assignments. We do not track your location when you are not using the app or outside of active bookings. You can revoke location permissions at any time through your device settings, although this may limit the app's core functionality.",
  },
  {
    title: "Push Notifications",
    content:
      "Our mobile applications use Firebase Cloud Messaging (FCM) to send push notifications. The Driver App sends notifications for new booking alerts, booking updates, and ride assignments. The Customer App sends notifications for booking confirmations and driver status updates. You can manage or disable notifications at any time through your device settings. We do not use notification data for advertising or marketing purposes.",
  },
  {
    title: "Device Permissions",
    content:
      "Our mobile applications may request the following device permissions: Location (to calculate meter fares and provide navigation), Phone (to enable direct calling between drivers and customers via the in-app call button), Notifications (to deliver booking alerts and ride updates), and Network access (to communicate with our dispatch servers). Each permission is requested only when needed for specific app functionality. You may grant or revoke permissions at any time through your device settings.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process bookings, provide customer support, improve our services, send service updates, and comply with legal obligations. We may also use anonymised data for analytics and to enhance the overall user experience. In our mobile applications, your data is used to match drivers with customers, calculate fares, process payments, and maintain booking history.",
  },
  {
    title: "Data Sharing & Third Parties",
    content:
      "We do not sell your personal data. We may share information with trusted third parties such as payment processors (Stripe), drivers assigned to your booking, Firebase (for push notifications and analytics), and service providers who assist our operations. All third parties are contractually obligated to protect your data and process it only for the purposes we specify.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. All data transmitted between our mobile applications and servers is encrypted using HTTPS/TLS. While no system is completely secure, we are committed to safeguarding your data to the best of our ability.",
  },
  {
    title: "Your Rights",
    content:
      "Under UK data protection law (UK GDPR), you have the right to access, correct, delete, or restrict processing of your personal data. You may also withdraw consent at any time. You can request deletion of your account and all associated data by contacting us. To exercise these rights, please contact us using the details below.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our services are not directed at children under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child under 16, we will take steps to delete that information promptly.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses cookies to enhance your browsing experience, analyse traffic, and personalise content. You can manage cookie preferences through your browser settings. Essential cookies are required for the website to function properly.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Booking records are typically retained for 6 years for legal and accounting purposes. Location data from completed trips is retained for 90 days for dispute resolution, after which it is anonymised or deleted.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this privacy policy or how we handle your data, please contact us at Admin@shinecars.co.uk or call us on 01945 243006. Our registered address is 9 Station Road, March, PE15 8LB, United Kingdom.",
  },
];

export default function PrivacyContent() {
  return (
    <>
      <PageHero
        title="Privacy"
        highlight="Policy"
        subtitle="Your privacy matters to us. Learn how we collect, use, and protect your information."
        breadcrumb="Privacy Policy"
      />

      <section className="py-14 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-navy/50 text-sm mb-10 leading-relaxed">
              Last updated: September 2026. This privacy policy explains how
              Shine Cars (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
              collects, uses, and protects your personal information when you
              use our website, mobile applications, and services.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                    {i + 1}. {s.title}
                  </h2>
                  <p className="text-navy/55 text-sm leading-relaxed">
                    {s.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
