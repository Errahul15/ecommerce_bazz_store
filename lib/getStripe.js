import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LNA1cSCy1dIkTtiyG2zmGzxpOYYDjHE7HDIRk0PuG9GgVDVj0iwYTkt9S0ZBvlKbgqzlAw3mrJysRm2Jfzc7LUJ00X2INB2bi"
    );
  }

  return stripePromise;
};

export default getStripe;
