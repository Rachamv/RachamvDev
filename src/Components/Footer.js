import { Link } from "react-router-dom";

// Sample array of category names
const categories = ["Education", "Technology", "Programming", "Career"];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="footer-categories">
          {categories.map((category, index) => (
            <li key={index}>
              {/* Generate dynamic link for each category */}
              <Link to={`/posts/categories/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
        <div className="footer-copyright">
          <small>
            &copy; Copyright All Rights Reserved || Adewunmi Oladele
          </small>
        </div>
      </div>
    </footer>
  );
}
