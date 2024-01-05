import { TheCatAPI } from '@thatapicompany/thecatapi';

const theCatAPI = new TheCatAPI(
  'live_lHCjuOVzbN8VkZ3AKGXHZ1HNO44nM9orTgyIVyCcNMXS4simomkgFt4DCC5vSyN5'
);

const getImage = async () => {
  const imageList = await theCatAPI.images.searchImages({
    limit: 1
  });
  console.log('imageList', imageList);

  const image = imageList[0].url;

  return image;
};

export { getImage };
