export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((avenger) => {
    return {
      params: { id: avenger.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      avenger: data,
    },
  };
};

const Details = ({ avenger }) => {
  return (
    <div>
      <h1>{avenger.name}</h1>
      <p>{avenger.email}</p>
      <p>{avenger.website}</p>
      <p>{avenger.address.city}</p>
    </div>
  );
};

export default Details;
