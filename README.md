# Swift Tasks

A sleek, user-friendly task management app built with **React** and **Vite**, enhanced by **FantaCSS** for a vibrant and engaging UI. This app allows users to efficiently manage tasks with features like due dates, editing, and priority levels, making it a versatile tool for personal organization.

## Features

- **Task Management**: Easily add, delete, and manage task lists.
- **Customizable Status Updates**: Track and update task progress.
- **Local Storage**: Data is saved to localStorage, ensuring tasks are preserved even when the app is closed.
- **Responsive Design**: Optimized for a seamless experience across devices.

## User Story

As a busy professional, I need an accessible way to keep track of my tasks. I want to add tasks with details, set deadlines, and edit information when needed. I also appreciate visual organization and reminders for due dates, which help me stay on top of my priorities.

## Technical Details

### Frontend

- **Framework**: Built with **React** for component-based design and efficient state handling.
- **Styling**: Styled with **[FantaCSS](https://www.fantacss.smoljames.com/)** for a vibrant, colorful UI that enhances user experience.
- **State Management**: **React's useState** and **useEffect** hooks manage task data and handle dynamic changes.
- **Data Persistence**: Uses **localStorage** for client-side data persistence, enabling users to retain tasks without a backend.

### Functionality Breakdown

1. **Task Creation**: Users can add tasks with attributes such as titles and priority levels.
2. **Task Filtering**: Users can filter tasks by criteria like status and priority to streamline their workflow.

## Installation

To set up and run this project locally:

1. Clone the repository:
   ```bash
   git clone [your-repo-link]
   ```
2. Navigate to the project folder:
   ```bash
   cd todo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```

## Future Development

Planned features include:
- **Task Prioritization**: Sort and focus on high-priority tasks.
- **Task Editing**: Allow users to modify task details, including deadlines and priorities.
- **Due Date Tracking**: Integrate a due date function for more effective scheduling.
- **Enhanced Reminders**: Visual reminders for tasks with upcoming deadlines.
- **Extended Task Details**: Option to add detailed notes to tasks.
- **Advanced Filtering**: Customizable filtering options to categorize tasks based on tags or project areas.
