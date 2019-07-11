const path = require('path')
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const fetchEvents = () => axios.get(`https://capecodstemnetwork.org/communityEvents.json`);
  // await for results
  const res = await fetchEvents();

  res.data.data.map((event, i) => {
    // Create your node object
    const eventNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `CommunityEvent`,
      },
      children: [],

      // Other fields that you want to query with graphQl
      title: event.title,
      slug: event.slug,
      startDate: event.startDate,
      endDate: event.endDate,
      allDay: event.allDay,
      eventWhere: event.eventWhere,
      eventAddress: {
        address: event.eventAddress.address,
        city: event.eventAddress.city,
        state: event.eventAddress.state,
        zipcode: event.eventAddress.zipcode,
      },
      grade: event.grade,
      study: event.study,
      hostedBy: event.hostedBy,
      eventUrl: event.eventUrl,
      openToThePublic: event.openToThePublic,
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(eventNode))
      .digest(`hex`);
    // add it to eventNode
    eventNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(eventNode);
  });
  return;
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
