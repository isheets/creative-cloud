console.log("js working");

window.addEventListener('DOMContentLoaded', (event) => {
    let projectThumbs = document.getElementsByClassName('project-thumb');

    for(let thumb of projectThumbs) {
        thumb.addEventListener('click', openProjectContent);
    }
});

//opens lightbox with content for requested project
var openProjectContent = (e) => {

    console.log(e);

    let projectClicked = null;

    if(e.target.localName !== "li") {
        for(let parent of e.path) {
            if(parent.localName === "li") {
                projectClicked = parent.id;
            }
        }
    }
    else {
        projectClicked = e.srcElement.id;
    }

    let contentToRender = null;

    switch(projectClicked) {
        case "twitter-emojis":
            contentToRender = twitterEmojiContent;
            break;
        case "syllabus-archive":
            contentToRender = syllabusArchiveContent;
            break;
        case "habits":
            contentToRender = habitsContent;
            break;
        case "driving-sucks":
            contentToRender = drivingSucksContent;
        case "finals-countdown":
            contentToRender = finalsCountdownContent;
        default:
            break;
    }

    if(contentToRender !== null) {
        SimpleLightbox.open({
            content: contentToRender,
            elementClass: 'slbContentEl'
        });
    }
}



