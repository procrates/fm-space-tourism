export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'frontpage') {
    return '/';
  }

  if (doc.type === 'destination') {
    return '/destination/' + doc.uid;
  }

  return '/not-found';
};