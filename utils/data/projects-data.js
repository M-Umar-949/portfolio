import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'moqah.pk',
        description: "An innovative event discovery and listing platform, Moqah.pk connects users with a diverse range of events across Pakistan, from conferences and workshops to concerts and festivals. Users can easily browse, discover, and book events by category, location, or interest, making it simpler to explore the vibrant event scene around them. Additionally, Moqah.pk empowers event organizers by allowing them to list their own events, bringing accessible information and seamless booking to everyone’s fingertips.",
        tools: ['Reactjs', 'nodejs', 'tailwind CSS','Postgress'],
        git_repo_link:'https://moqah.pk',

        code: '',
        demo: '',
        image: ayla,
        role: 'Full stack dev focused on backend',
    },
    {
        id: 2,
        name: 'SnapBill AI',
        description: "Me and my team member built an AI-powered billing system. We have developed it using YOLO, Flask, Html, Css, and js. We trained the object detection model on pur custom dataset. The dataset was made by taking pictures of kitchen crocery items(Uploaded on kaggle)",
        tools: ['LabelImg', 'YOLO', 'Torch', 'Pillow', 'Flask', 'HTML', 'CSS', 'Js'],
        role: 'AI/ML engineer',
        git_repo_link:'https://github.com/SaadGillani7/SnapBill-Ai.-Ai-powered-kitchen-crocery-items-billing-system',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Hourly electricity consumption forcasting system',
        description: 'This project aims to develop a forecasting system for hourly electricity consumption using various models, including neural networks. The system predicts electricity usage for the next 12 hours based on historical data.',
        tools: ['Torch', 'Stats model', "D3", "Chartjs", "Pandas", "Flask", "prophet", "skLearn"],
        role: 'Full stack ML engineer',
        git_repo_link:'https://github.com/M-Umar-949/Electricity-consumption-forcasting-system-Time-series-data',

        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Electronica datawarehouse',
        description: 'This project demonstrates a data warehousing system with OLAP queries, featuring a custom join algorithm (HYBRIDJOIN) that can be further optimized. The main goal is to efficiently manage and process data streams for insertion into a data warehouse. ',
        tools: ['JAVA', 'MySQL'],
        git_repo_link:'https://github.com/M-Umar-949/ELECTRONICA_DataWarehouse_JAVA',

        code: '',
        role: 'Bakcend developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'GraphViz_D3.js',
        description: "This project leverages the networkX library in Python to analyze the nature of the graph. Users upload an adjacency matrix, and the program determines whether the matrix represents a connected graph. If the graph is not connected, the program alerts the user to upload a connected graph file. If the graph matrix is connected, the program detects and visualizes three types of graphs",
        tools: ['D3', 'Python', 'networkX', 'Flask', "HTML","Css","js"],
        git_repo_link:'https://github.com/M-Umar-949/Graph-viz-_-D3.js',

        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack data scientist',
    }
    ,
    {
        id: 6,
        name: 'Product recommendation system',
        description: "This project involves building a product recommendation system using Apache Spark for data processing, Flask for the web application, and MongoDB for data storage. We will also utilize Kafka for real-time data streaming. The dataset used is the Amazon Review Dataset.",
        tools: ['PySpark', 'MongoDB', 'Apache kafka', 'Flask', "HTML","Css","js"],
        git_repo_link:'https://github.com/M-Umar-949/Product-Reccomendation-using-ML',

        code: '',
        demo: '',
        image: ayla,
        role: 'Big data / ML engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },