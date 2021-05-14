// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const essays = [
  {
    title: "Essay 1",
    text: "This is the essay",
  },
  {
    title: "Essay 2",
    text: "This is essay 2",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ essays });
};

