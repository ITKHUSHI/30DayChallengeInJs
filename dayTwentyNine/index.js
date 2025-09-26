// Day 29: Project 6 - Social Media Dashboard
// Tasks/Activities:

// Activity 1: Setting up the project
// Task 1: Initialize a new project directory and set up the basic HTMLM structure for the social media dash board
// Task 2: Add a basic CSS file to style the social media dashboard , including a container for posts and a form for creating new posts

// Activity 2: User Authentication
// Task 3: create simple login form that collects a username and password . STyle the form using CSS
  const loginForm=document.getElementById('login-form');
  const loginBtn=document.getElementById('login-btn');
  
// Task 4: Write a script to handle user login and store the logged-in user's information in localStorage or sessionStorage
function loginUser(){
	const username=document.getElementById('user-name').value ;
	const password=document.getElementById('password').value;
	if(username && password){
		sessionStorage.setItem('username',username);
		sessionStorage.setItem('password',password);
		alert("Login Successfully");
		console.log('User logged in :' ,{username,password})
	}
	else{
		alert("please enter both username and password")
		console.log('Please enter both username and password.')
	}
}
loginBtn.addEventListener('click',loginUser)


// Activity 3: Creating Posts
// Task 5: Add a form to the HTML structure with fields for entering post details(e.g,text,image).style the from using CSS
// Task 6: write a script to handle form submission , creating a new post object and adding it to an array of posts Display the new post in the feed
const posts=[];
function setPost(){
	
	const postImage=document.getElementById('image').files[0];
	const caption=document.getElementById('caption').value;
	
	const newPost={
	postImage:postImage?URL.createObjectURL(postImage) : null,
	caption:caption,
	username:sessionStorage.getItem("username"),
	timestamp: new Date().toLocaleString(),
	likes: 0,
    comments: [],
}
	if(!newPost){console.log(newPost)
		alert("fill both the deatils")
	}
	else{
		
		alert("post successfully")
		sessionStorage.setItem('newPost',JSON.stringify(newPost));
	   posts.push(newPost);
	   displayPosts();
	   clearForm();
	}
}
	

function clearForm() {
	document.getElementById("image").value = "";
	document.getElementById("caption").value = "";
  }

const postBtn=document.getElementById('post-btn');
postBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	setPost();
	
})

// Activity 4: Display Posts
// Task 7: write a function to iterate over the array of posts and display each post in the feed . Including post details like text , username , and timestamp

function displayPosts() {
	const postsContainer = document.getElementById("postsContainer");
	postsContainer.innerHTML = ""; // Clear existing posts
  
	posts.forEach((post,index) => {
	  const postElement = document.createElement("div");
	  postElement.classList.add("post");
  
	  const postHeader = document.createElement("div");
	  postHeader.classList.add("post-header");
  
	  const usernameElement = document.createElement("span");
	  usernameElement.classList.add("post-username");
	  usernameElement.textContent = post.username;
  
	  const timestampElement = document.createElement("span");
	  timestampElement.classList.add("post-timestamp");
	  timestampElement.textContent = post.timestamp;
  
	  postHeader.appendChild(usernameElement);
	  postHeader.appendChild(timestampElement);
  
	  postElement.appendChild(postHeader);
  
	  const postTextElement = document.createElement("p");
	  postTextElement.textContent = post.caption;
	  postElement.appendChild(postTextElement);
  
	  if (post.postImage) {
		const postImageElement = document.createElement("img");
		postImageElement.src = post.postImage;
		postImageElement.alt = "Post Image";
		postImageElement.style.maxWidth = "100%";
		postElement.appendChild(postImageElement);
	  }
  
	  const postActions = document.createElement("div");
    postActions.classList.add("post-actions");

    const likeButton = document.createElement("button");
    likeButton.textContent = `Like (${post.likes})`;
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", () => likePost(index));
    const commentButton = document.createElement("button");
    commentButton.textContent = `Comment (${post.comments.length })`;
    commentButton.classList.add("comment-button");
    commentButton.addEventListener("click", () => showCommentForm(index));

    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);

    postElement.appendChild(postActions);

    // Comment Section
    const commentsSection = document.createElement("div");
    commentsSection.classList.add("comments-section");

    post.comments.forEach((comment) => {
      const commentElement = document.createElement("p");
      commentElement.classList.add("comment");
      commentElement.textContent = comment;
      commentsSection.appendChild(commentElement);
    });

    const commentForm = document.createElement("div");
    commentForm.classList.add("comment-form");
    commentForm.style.display = "none";

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.classList.add("comment-input");
    commentInput.placeholder = "Add a comment...";

    const submitCommentButton = document.createElement("button");
    submitCommentButton.textContent = "Submit";
    submitCommentButton.classList.add("submit-comment-button");
    submitCommentButton.addEventListener("click", () => addComment(index, commentInput.value));

    commentForm.appendChild(commentInput);
    commentForm.appendChild(submitCommentButton);

    commentsSection.appendChild(commentForm);
    postElement.appendChild(commentsSection);

	  postsContainer.appendChild(postElement);
	});
  }
  
  function likePost(index) {
	posts[index].likes += 1;
	displayPosts(); // Update the UI
  }
  function showCommentForm(index) {
	const postElements = document.querySelectorAll(".post");
	const commentForm = postElements[index].querySelector(".comment-form");
	commentForm.style.display = commentForm.style.display === "none" ? "block" : "none";
  }
  function addComment(index, commentText) {
	if (commentText.trim() !== "") {
	  posts[index].comments.push(commentText);
	  displayPosts(); // Update the UI
	}
  }
// Task 8: Style the post feed using CSS to Make it visually appealing

// Activity 5: post Interaction
// Task 9: Add "LIKE" and "COMMENT" button to each post . write functions to handle liking a post and adding comment to a post

// Task 10: Display the number of likes and comments for each post . update the display when users interact with the posts

// Activity 6: Enhancing the UI
// Task 11: ADD CSS Style to differentiare posts by Different users Display the loggerd-in user's post with a distinct Style.
// Task 12: ADd CSS animations ot transitions to make the socail media dashboard more interactive and visually appealing