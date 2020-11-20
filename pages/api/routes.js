// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json([
        { dynamic:"Post", routes:"Jhon" },
        { dynamic:"Picture", routes:"Mike"},
        { dynamic:"Comments", routes:"Joana"}
    ])
  }
  