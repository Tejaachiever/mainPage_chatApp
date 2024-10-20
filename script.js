window.addEventListener("message", function(event) {
    console.log("Message received:", event.data);

    if (event.data.action === "login" && event.data.user === "chatX-usera") {
        // Perform action for User A login (e.g., remove .head-a)
        // console.log('Removing head-a after iframe login');
        const headA = document.querySelector('.head-a');
        if (headA) {
            headA.remove();
            const iframe = headA.nextElementSibling; // Assuming iframe is directly after headA
            iframe.style.height = "100%";
        }
    } else if (event.data.action === "login" && event.data.user === "chatX-userb") {
        // Perform action for User B login (e.g., hide .head-b)
        // console.log('Hiding head-b after iframe login');
        const headB = document.querySelector('.head-b');
        if (headB) {
            headB.style.display = "none";
        }
    }
});