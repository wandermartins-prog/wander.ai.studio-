// =======================================
// Wander AI Studio
// Sprint 0 - Foundation
// =======================================

const prompts = {

    lesson: {
        title: "Lesson Planner",
        text:
            "This feature will become the lesson planning assistant."
    },

    assessment: {
        title: "Assessment Builder",
        text:
            "This feature will generate worksheets, quizzes, study guides and answer keys."
    },

    slides: {
        title: "Slides Studio",
        text:
            "This feature will prepare presentations for Canva, Google Slides and PowerPoint."
    },

    game: {
        title: "Game Studio",
        text:
            "This feature will generate HTML games, Kahoots and classroom activities."
    }

};

function openPrompt(type){

    const item = prompts[type];

    if(!item){

        alert("Module not found.");

        return;

    }

    alert(

`${item.title}

${item.text}

(Coming in Sprint 1)`);

}

console.log("✅ Wander AI Studio loaded successfully.");
