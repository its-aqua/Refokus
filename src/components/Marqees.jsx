import Marqee from "./Marqee";

const Marqees = () => {
  const images = [
    [
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    ],
    [
 "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", 
    ],
  ];

  return (
    <div className="py-20 mt-18">
      {images.map((item) => (
        <Marqee imgurl={item} />
      ))}
    </div>
  );
};

export default Marqees;
