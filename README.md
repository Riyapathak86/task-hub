# task-hub
Task-hub is a responsive and dynamic React.js task management application tailored for both Admins and Employees. Designed to streamline task assignment and tracking, this app provides a seamless experience with real-time status updates and persistent data storage using LocalStorage — all without a backend server.
## 🚀 Features

### Admin Panel
- Secure login as Admin with fixed credentials.
- Create and assign new tasks to any employee by selecting their name.
- View all employee tasks with comprehensive history and status tracking.
- Responsive UI ensuring smooth experience on desktops, tablets, and mobile devices.
  
- ### Employee Panel
- Login using unique employee credentials.
- View tasks assigned specifically to the logged-in employee.
- Update task statuses: Accept, Complete, or Mark as Failed.
- Tasks are organized under tabs: New, Accepted, Completed, and Failed.

---## 🛠️ Technologies Used
- React.js (Component-based rendering without React Router)
- Bootstrap 5 for responsive layout
- Custom CSS for enhanced styling
- LocalStorage for persistent state management (No backend server)

---
## 🔑 User Credentials

| Role     | Email            | Password |
| -------- | ---------------- | -------- |
| Admin    | admin@example.com | 123      |
| Employee |  employee1@example.com | 123      |
| Employee | employee2@example.com | 123  |
| Employee | employee3@example.com | 123  |
| Employee | employee4@example.com | 123  |
| Employee | employee5@example.com | 123  |

---

## 📋 How to Use

1. Login as Admin or Employee with the credentials above.
2. **Admin users** will access the task assignment dashboard:
   - Assign new tasks by selecting employee and entering task details.
3. **Employees** will see tasks assigned to them and can update status:
   - Accept new tasks.
   - Mark tasks as completed or failed.
4. Use the Logout button to securely exit and return to the login page.
5. All data (tasks, statuses) is saved in LocalStorage to prevent data loss on page reload.

---



## 📢 Notes

- This project does **not** use React Router — navigation is handled with conditional rendering of components.
- The interface is fully responsive, optimized for mobile, tablet, and desktop.
- Data persistence via LocalStorage ensures task data remains intact after refreshing or closing the browser.

---

## 🙌 Acknowledgments

Thanks for checking out this project!  
If you find it useful or interesting, please consider giving it a ⭐ star on GitHub!

---
