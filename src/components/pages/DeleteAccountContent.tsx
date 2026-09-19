"use client";

import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function DeleteAccountContent() {
  return (
    <>
      <PageHero
        title="Delete"
        highlight="Account"
        subtitle="Request the deletion of your Shine Cars account and all associated personal data."
        breadcrumb="Delete Account"
      />

      <section className="py-14 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                  Account Deletion Request
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed">
                  If you would like to delete your Shine Cars account (Customer
                  App or Driver App), you can request account deletion by
                  contacting us using the methods below. Once your request is
                  processed, your account and all associated personal data will
                  be permanently deleted.
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                  What Data Will Be Deleted
                </h2>
                <ul className="text-navy/55 text-sm leading-relaxed list-disc pl-5 space-y-1.5">
                  <li>Your account profile information (name, email, phone number)</li>
                  <li>Booking history and trip records</li>
                  <li>Payment method details</li>
                  <li>Location data from previous trips</li>
                  <li>Push notification tokens and preferences</li>
                  <li>Any other personal data associated with your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                  Data We May Retain
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed">
                  Certain records may be retained for up to 6 years after
                  deletion as required by UK law for legal, tax, and accounting
                  purposes. This data is stored securely and is not used for any
                  other purpose. Anonymised and aggregated data that cannot
                  identify you may also be retained.
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                  Processing Time
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed">
                  Account deletion requests are processed within 30 days. You
                  will receive a confirmation email once your account has been
                  deleted. During this period, your account will be deactivated
                  and you will not be able to use the app.
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                  How to Request Deletion
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed mb-4">
                  To request deletion of your account and personal data, please
                  contact us using one of the following methods:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-navy text-sm min-w-[60px]">Email:</span>
                    <a
                      href="mailto:info@shinecars.co.uk?subject=Account%20Deletion%20Request"
                      className="text-sm text-crimson hover:underline"
                    >
                      info@shinecars.co.uk
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-navy text-sm min-w-[60px]">Phone:</span>
                    <a
                      href="tel:01945243006"
                      className="text-sm text-crimson hover:underline"
                    >
                      01945 243006
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-navy text-sm min-w-[60px]">Post:</span>
                    <span className="text-navy/55 text-sm">
                      9 Station Road, March, PE15 8LB, United Kingdom
                    </span>
                  </div>
                </div>
                <p className="text-navy/55 text-sm leading-relaxed mt-4">
                  Please include your registered email address and full name in
                  your request so we can locate and verify your account.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
