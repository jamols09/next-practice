export default (req, res) => {
    res.statusCode = 200
    res.json([
        { href:"/useState", label:"useState Code" },
        { href:"/navItems", label:"Route Links" },
        { href:"/form", label:"Using Form"}
    ])
}
  