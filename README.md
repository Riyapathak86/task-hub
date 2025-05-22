# task-hub
Task Hub is a responsive and dynamic React.js task management application built with Bootstrap and custom CSS. Designed for both Admins and Employees, this system enables task assignment, new task creation, status updates, and real-time tracking — all managed through efficient state management and LocalStorage persistence, delivering a fully responsive and feature-rich frontend experience.


📱 Key Features
👑 Admin Dashboard
Login as Admin using admin credentials.

Assign new tasks to any employee by selecting their name.

View employee task table with full task history.

Fully responsive and smooth experience on all devices.

👥 Employee Dashboard
Login as Employee using employee credentials.

View assigned tasks under the New tab.

Perform task actions:

✅ Accept Task

🏁 Complete Task

❌ Fail Task

Track task status across New, Accepted, Completed, and Failed sections.

🛠️ Tech Stack
⚛️ React.js (No React Router used)

🅱️ Bootstrap 5

🎨 Custom CSS

💾 LocalStorage for data persistence (no backend)

🔑 Login Credentials
👑 Admin Login:
Email	Password
admin@example.com	123

👥 Employee Logins:
Name	Email	Password
Employee 1	employee2@example.com	123
Employee 2	employee2@example.com	123
Employee 3	employee3@example.com	123
Employee 4	employee4@example.com	123
Employee 5	employee5@example.com	123

📋 How to Use
Login with Admin or Employee email/password.

If Admin:

You will be redirected to the Admin Dashboard.

Assign tasks to employees by selecting their name and filling in task details.

If Employee:

You will be redirected to the Employee Dashboard.

View your assigned tasks under the New tab.

Accept, Complete, or Fail your tasks based on progress.

To logout, click the Logout button. After logout, you will be redirected to the Login Dashboard.

All task updates and status changes are automatically saved using LocalStorage, ensuring no data loss on page reload.

🖥️ Live Demo
🚀 Live Project Link
https://task-hub-smoky.vercel.app/

💬 Notes
No React Router used; page switching is handled using component-based conditional rendering.

Responsive design works perfectly across desktop, tablet, and mobile screens using Bootstrap and custom CSS.

Data persistence handled through LocalStorage, so data remains even after refreshing.

🙌 Special Thanks
Thanks for checking out this project!
If you like it, don’t forget to ⭐ star the repository on GitHub!









