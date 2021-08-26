export default function BlogDetails(props) {
    return `
        <header>
         
        </header>
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3">
                    <form id="post-form" class=" card shadow-sm p-3">
                        <p id="error"></p>
                        <h5> New Blog </h5>
                        <input id="title" class="border-box m-1" name="title" type="text" placeholder="Blog Title"/>
                        <textarea cols="20" rows="80" class="m-1" id="content" name="content" type="text" placeholder="Content"></textarea>
                        <button id="post-btn" class="btn-sm m-1" type="submit"> Post </button>
                    </form>
                </div>
        </main>
    `;
}