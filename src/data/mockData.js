export const users = {
    1: "John Doe",
    2: "Jane Doe",
    3: "Alice Smith",
    4: "Bob Johnson",
    5: "Charlie Brown",
  };
  
  export const posts = [
    {
      id: 1,
      userId: 1,
      content: "This is a post about React.",
      comments: [
        { id: 1, text: "Great post!" },
        { id: 2, text: "I learned a lot." },
      ],
      timestamp: "2023-10-01T10:00:00Z",
    },
    {
      id: 2,
      userId: 2,
      content: "Just finished a new project.",
      comments: [
        { id: 3, text: "Awesome work!" },
      ],
      timestamp: "2023-10-02T11:00:00Z",
    },
    {
      id: 3,
      userId: 1,
      content: "Learning React is fun!",
      comments: [
        { id: 4, text: "I agree!" },
        { id: 5, text: "React is amazing." },
      ],
      timestamp: "2023-10-03T12:00:00Z",
    },
    {
      id: 4,
      userId: 3,
      content: "Check out my new blog post.",
      comments: [],
      timestamp: "2023-10-04T13:00:00Z",
    },
    {
      id: 5,
      userId: 4,
      content: "Working on a new feature.",
      comments: [
        { id: 6, text: "Can't wait to see it!" },
      ],
      timestamp: "2023-10-05T14:00:00Z",
    },
  ];