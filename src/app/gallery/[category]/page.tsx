export default function galleryCategory({ params }: { params: { category: string } }) {
    const { category } = params;
    return <h1>category gallery: {`${category}`}</h1>;
  }