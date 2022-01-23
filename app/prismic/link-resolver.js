const linkResolver = (doc) => {
    if (doc.type === 'destinations') return `/${doc.uid}`
    if (doc.type === 'frontpage') return `/`
    return '/'
  }