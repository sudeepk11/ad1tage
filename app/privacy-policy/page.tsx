import React from "react";
import { josefin } from "../../utils/utilsFonts";

export default function PrivacyPolicy() {
  return (
    <div className=" w-11/12 mx-auto mb-5 text-justify flex flex-col gap-5">
      <header>
        <h1
          className={`md:text-[56px] md:leading-[56px] font-semibold ${josefin.className} md:mt-[80px] max-md:text-4xl`}
        >
          Privacy Policy
        </h1>
        <strong>Effective Date: 30th August 2023</strong>
      </header>

      <main>
        <p>
          Thank you for using Ad1tage. This Privacy Policy outlines how we
          collect, use, disclose, and protect your personal information when you
          use our website and related services. By accessing or using our
          website, you consent to the practices described in this Privacy
          Policy.
        </p>

        <section className="py-5">
          <h2 className="font-bold text-2xl">1. Information We Collect</h2>
          <p>
            We collect the following types of information when you use our
            website:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> We may collect your full
              name, phone number, email address, and account password when you
              create an account with us.
            </li>
            <li>
              <strong>Location Information:</strong> With your consent, we may
              collect and process information about your location to provide you
              with personalized services and to enhance your user experience.
            </li>
          </ul>
        </section>

        <section className="py-5">
          <h2 className="font-bold text-2xl">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>
              <strong>Account Management:</strong> Your full name, phone number,
              email, and account password are used for account creation,
              authentication, and communication related to your account.
            </li>
            <li>
              <strong>Personalization:</strong> We may use your location
              information to tailor our services to your preferences and to
              provide you with location-based recommendations.
            </li>
            <li>
              <strong>Communication:</strong> We may use your email address and
              phone number to send you important updates, notifications, and
              promotional materials. You can opt out of promotional
              communications at any time.
            </li>
            <li>
              <strong>Improvement of Services:</strong> We use the collected
              information to understand how users interact with our website, to
              analyze trends, and to improve our services.
            </li>
          </ul>
        </section>

        <section className="py-5">
          <h2 className="font-bold text-2xl">
            3. Information Sharing and Disclosure
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with the following
            parties:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share your information
              with third-party service providers who help us operate our website
              and provide services to you. These providers are bound by
              confidentiality agreements and are only allowed to use your
              information for the specified purposes.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may share your information
              in response to legal requests, court orders, or to comply with
              applicable laws and regulations.
            </li>
          </ul>
        </section>

        <section className="py-5">
          <h2 className="font-bold text-2xl">4. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission over the internet or electronic
            storage method is completely secure. Therefore, we cannot guarantee
            the absolute security of your information.
          </p>
        </section>

        <section className="py-5">
          <h2 className="font-bold text-2xl">5. Your Choices</h2>
          <ul>
            <li>
              <strong>Access and Correction:</strong> You can access and update
              your personal information by logging into your account. If you
              want to delete your account, please contact us at [contact email].
            </li>
            <li>
              <strong>Location Information:</strong> You can control location
              tracking through your device settings or browser settings.
            </li>
            <li>
              <strong>Promotional Communications:</strong> You can opt out of
              receiving promotional emails by following the instructions
              provided in the email.
            </li>
          </ul>
        </section>

        <section className="py-5">
          <h2 className="font-bold text-2xl">
            6. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. The updated Privacy Policy will be posted on our
            website, and the &#34;Effective Date&#34; at the top will indicate when the
            changes take effect.
          </p>
        </section>

        <section className="py-5">
          <h2 className="font-bold text-2xl">7. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests related to your
            personal information or this Privacy Policy, please contact us at
            [contact email].
          </p>
        </section>
      </main>

      <footer>
        <p>
          By using our website, you acknowledge that you have read and
          understood this Privacy Policy and agree to its terms.
        </p>
      </footer>
    </div>
  );
}
