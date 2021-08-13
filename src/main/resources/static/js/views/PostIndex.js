export default function PostIndex(props) {

    return `
        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
            <div>
                ${props.posts.map(post => `${printOutBlogs(post)}`).join('')}  
                <form id="post-form">
                    <input id="title" class="border-box" name="title" type="text" placeholder="Blog Title"/>
                    <input id="content" name="content" type="text" placeholder="Content"/>
                    <button id="save-btn" class="btn-sm" type="submit"> Post </button>
                </form>
            </div>
        </main>
    `;
}

function printOutBlogs(post) {
    return `
            <h5> ${post.title}</h5>
            <p>${post.content}</p>
    `
}

export function CreatePost() {
    document.querySelector("#save-btn").addEventListener("click", function () {
        let obj = {
            title: document.querySelector("#title").value,
            content: document.querySelector("#content").value,
        }

        const url = `http://localhost:8080/api/posts`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)

        };
        console.log(options)
        fetch(url, options)
            .then(data => console.log(data))
            .catch(error => console.error(error)); /* handle errors */

    });
}