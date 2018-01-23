exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const pageExport = page;

  return new Promise(resolve => {
    if (page.path.match(/^\/projects/)) {
      pageExport.layout = 'projects';

      createPage(pageExport);
    }

    resolve();
  });
};
