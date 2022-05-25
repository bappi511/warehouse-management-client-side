import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='text-center'>All Answers:</h2>
                <div>
                    <h5>Answer (1)</h5>
                    <p className='border border-danger p-3 rounded'>
                        1. <span className='fw-bold text-warning'>JavaScript</span> : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                        2.<span className='text-success fw-bold mt-2'>NodeJS</span> :NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    </p>
                    <h5>Answer (2)</h5>
                    <p className='border border-danger p-3 rounded'><span className='text-secondary'>When should we use Nodejs?</span><br /><br />
                        Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br /> <br />
                        <span className='text-secondary'>When should we use MongoDB?</span><br /><br />
                        If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing
                    </p>
                    <h5>Answer (3)</h5>
                    <p className='border border-danger p-3 rounded'>
                        <span className='text-secondary'> Differences between sql and nosql databases?</span> <br /> <br />
                        1.SQL databases are relational, NoSQL databases are non-relational. <br />
                        2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                        5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;