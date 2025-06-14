import  express  from "express";
import  {signup, signin,signout, getUser}  from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.get("/me",verifyToken,getUser);
router.get("/github-activity/:page", async (req, res) => {
  const page = req.params.page || 1; // default to 1 if not provided

  try {
    const response = await fetch(`https://api.github.com/users/sarans-h/events?per_page=30&page=${page}`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer  ${process.env.TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "GitHub API error", details: await response.text() });
    }

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error("GitHub proxy error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.post("/google", google);
export default router




