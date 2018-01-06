import has from 'lodash.has';

export default validateStory = (story) => {
    let isValid = true;
    let errorMessages = [];
    if (!has(story, 'header')) {
      return {
        isValid: false,
        errorMessages: ['Invalid Header']
      };
    }
    if (
      !has(story.header, 'storyName') ||
      !has(story.header, 'storyDescription')
    ) {
      return {
        isValid: false,
        errorMessages: ['Story name and description is required']
      };
    }
    if (!story.header.storyName || !story.header.storyDescription) {
      return {
        isValid: false,
        errorMessages: ['Story name and description is required']
      };
    }
    if (
      // TODO: figure out why this does not work (!has(story.tour.locations)) ||
      story.tour.locations.length <= 0
    ) {
      return {
        isValid: false,
        errorMessages: ['A story must have at least one location']
      };
    }
    return {
      isValid
    };
  };