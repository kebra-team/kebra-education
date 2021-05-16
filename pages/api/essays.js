// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const essays = [
  {
    title: "History of schools",
    text: "This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1This is essay 1",
  },
  {
    title: "Schools vs Learning",
    text: "This is essay 2",
  },
  {
    title: "The myth of the teacher and student",
    text: "This is essay 3",
  },
  {
    title: "Chaos and Order in the system",
    text: "This is essay 4",
  },
  {
    title: "Behaviour and low expectations",
    text: "This is essay 5",
  },
  {
    title: "Self interest of leadership, teachers and students",
    text: "This is essay 6",
  },
  {
    title: "Hierarchies and incentives",
    text: "This is essay 7",
  },
  {
    title: "Participants questioning the system",
    text: "This is essay 8",
  },
  {
    title: "Scarcity and competition",
    text: "This is essay 9",
  },
  {
    title: "Standardized testing and job market",
    text: "This is essay 10",
  },
  {
    title: "The mental asylum style system",
    text: "This is essay 11",
  },
  {
    title: "Tech and outdoor learning",
    text: "This is essay 12",
  },
  {
    title: "flexible learning records and modularity",
    text: "This is essay 13",
  },
  {
    title: "resources, learning styles and modes of learning",
    text: "This is essay 14",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(essays);
};
