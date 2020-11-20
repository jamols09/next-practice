export default (req, res) => {
    res.statusCode = 200
    res.json([
        { href:"/useState", label:"useState Code" },
        { href:"/routeLinks", label:"Route Links" },
    ])
}
  