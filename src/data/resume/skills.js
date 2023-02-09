// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Heroku',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Software Engineering', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Software Engineering', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Software Engineering', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Software Engineering', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'Plotly Dash',
    competency: 4,
    category: ['Data Science', 'Visualization'],
  },
  {
    title: 'Git/Mercurial',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools', 'Software Engineering'],
  },
  {
    title: 'Google Cloud',
    competency: 3,
    category: ['Tools', 'Software Engineering'],
  },
  {
    title: 'Microsoft Azure',
    competency: 4,
    category: ['Tools', 'Software Engineering'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Data Science'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'ggplot',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Software Engineering'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Software Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
