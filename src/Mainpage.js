import React, { useState } from 'react';
import "./Mainpage.css";
const Mainpage = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The India Story',
      author: '	Bimal Jalal',
      subject: 'Novel',
      publishDate: '2022-12-01',
    },
    {
      id: 2,
      title: 'A Better India: A Better World',
      author: 'Narayana Murthy',
      subject: 'Novel',
      publishDate: '2022-12-01',
    },
    {
      id: 3,
      title: 'Pinjar',
      author: 'Amrita Pritam',
      subject: 'Novel',
      publishDate: '2022-11-15',
    },
    {
      id: 4,
      title: 'David Copperfield',
      author: 'Charles Darwin',
      subject: 'Novel',
      publishDate: '2022-10-22',
    },
    {
      id: 5,
      title: 'A Womans Life',
      author: 'Guy de Maupassant',
      subject: 'Novel',
      publishDate: '2022-09-18',
    },
    {
      id: 6,
      title: 'Akbarnama',
      author: 'Abul Fazl',
      subject: 'Novel',
      publishDate: '2022-08-07',
    },
    {
      id: 7,
      title: 'Anand Math',
      author: 'Bankim Chandra Chatterjee',
      subject: 'Novel',
      publishDate: '2022-07-23',
    },
    {
      id: 8,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      subject: 'Novel',
      publishDate: '2022-06-09',
    },
    {
      id: 9,
      title: 'Apple Cart',
      author: 'George Bernard Shaw',
      subject: 'Novel',
      publishDate: '2022-05-14',
    },
    {
      id: 10,
      title: 'Arthshastra',
      author: 'Kautilya',
      subject: 'Novel',
      publishDate: '2022-04-30',
    },
    
  ]);

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchCriteria, setSearchCriteria] = useState({
    title: '',
    author: '',
    subject: '',
    publishDate: '',
  });

  // Function to handle search/filtering
  const handleSearch = () => {
    const filtered = books.filter((book) => {
      const { title, author, subject, publishDate } = searchCriteria;
      return (
        book.title.includes(title) &&
        book.author.includes(author) &&
        book.subject.includes(subject) &&
        book.publishDate.includes(publishDate)
      );
    });

    setFilteredBooks(filtered);
  };

  // Function to handle input changes in search/filter criteria
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Library Management</h1>

      <div>
        <h2>Search/Filter</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={searchCriteria.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={searchCriteria.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={searchCriteria.subject}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Publish Date:</label>
          <input
            type="text"
            name="publishDate"
            value={searchCriteria.publishDate}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <h2>List of Books</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Subject</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.subject}</td>
                <td>{book.publishDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Mainpage;

