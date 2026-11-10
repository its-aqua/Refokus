import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Stripe",
      description:
        "Financial infrastructure for the internet, powering payments and online business operations worldwide.",
      live: true,
      case: false,
    },
    {
      title: "Linear",
      description:
        "Streamlined issue tracking and project planning tool built specifically for high-performance software teams.",
      live: true,
      case: true,
    },
    {
      title: "Vercel",
      description:
        "Platform for frontend developers, providing the speed and reliability to deploy modern web applications.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Innovative digital agency specializing in immersive web experiences and cutting-edge brand designs.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "Open-source backend alternative providing real-time database, authentication, and instant API generation.",
      live: true,
      case: false,
    },
  ];

  return (
    <div className="mt-24">
      {products.map((elem, index) => (
        <Product data={elem} />
      ))}
    </div>
  );
};

export default Products;
