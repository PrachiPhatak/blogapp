export default function Navbar(props) {
    return `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Express Yourself</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/" data-link>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/posts" data-link>Blogs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about" data-link>About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login" data-link>Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/register" data-link>Register</a>
                  </li>
                </ul>
              </div>
            </nav>

    `;
}