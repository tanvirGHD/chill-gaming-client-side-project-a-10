import Lottie from "lottie-react";
import faqLogo from "../../assets/Animation - 1736190808263.json";

const Faq = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold text-pink-600 mb-5">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row">
        {/* Animation Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 md:order-first">
          <Lottie
            animationData={faqLogo}
            className="w-full h-[250px] md:h-[400px]"
          />
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-1/2 text-black">
          {/* FAQ 1 */}
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is Gaming Heaven?
            </div>
            <div className="collapse-content">
              <p>
                Gaming Heaven is your ultimate destination for top-rated games. We
                offer a variety of categories to explore and enjoy the best gaming
                experiences available!
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I browse games on the platform?
            </div>
            <div className="collapse-content">
              <p>
                You can easily browse games by categories or view the top-rated
                games. Our user-friendly interface makes navigation seamless,
                helping you find your favorite games quickly!
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I filter games by price?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can filter games based on their price. We offer various
                price ranges so you can choose a game that fits your budget.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I purchase a game?
            </div>
            <div className="collapse-content">
              <p>
                Once you select a game, you can add it to your cart and proceed with
                the checkout process. We offer secure payment options to ensure a
                smooth transaction.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept various payment methods including credit/debit cards,
                PayPal, and other secure online payment options. Your transaction
                will be safe and encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
