<template>
  <main class="bg-white">
    <div class="post">
      <SubBanner title="Thêm bài viết" />
      <form class="">
        <!-- <input type="hidden" role="uploadcare-uploader" name="my_file_input" /> -->
        <input id="uploader" type="hidden" data-multiple="true" />
        <!-- <input
          type="file"
          multiple
          accept="image/png, image/jpeg"
          role="uploadcare-uploader"
          name="my_files"
          data-multiple="true"
          @change="handleSubmit"
        /> -->
        <!-- <div v-if="isLoading">Loading</div> -->
        <!-- <button type="button" value="Upload">Upload</button> -->
      </form>
      <div class="block-img" v-for="(img, index) in dataUpload" :key="index">
        <img :src="img" :alt="'decor' + index" />
      </div>
    </div>
  </main>
</template>

<script>
// import User from './api/user';
import SubBanner from '../components/SubBanner.vue';
import { mapActions, mapState } from 'vuex';
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js';
import { uploadFile } from '@uploadcare/upload-client';
import { UploadClient } from '@uploadcare/upload-client';
// import { connectBlocksFrom } from '@uploadcare/blocks/abstract/connectBlocksFrom';

const client = new UploadClient({ publicKey: import.meta.env.VITE_API_UPLOADCARE ?? process.env.VITE_API_UPLOADCARE });
// import { connectBlocksFrom } from '@uploadcare/blocks/abstract/connectBlocksFrom';

export default {
  components: {
    SubBanner,
  },
  data() {
    return {
      dataPublicKey: import.meta.env.VITE_API_UPLOADCARE ?? process.env.VITE_API_UPLOADCARE,
      dataUpload: [],
      isLoading: false,
    };
  },
  computed: {
    ...mapState('products', ['products', 'loading']),
  },
  watch: {},
  async created() {},
  async mounted() {
    const widget = uploadcare.Widget('#uploader', {
      publicKey: import.meta.env.VITE_API_UPLOADCARE ?? process.env.VITE_API_UPLOADCARE,
    });
    await widget.onChange((e) => {
      console.log(e, 'cc');
      var files = uploadcare.fileFrom('input', input);
      files.forEach((file) => {
        // file is a file instance
        file
          .done(function (fileInfo) {
            console.log('🚀 ~ file: AddPosts.vue:65 ~ fileInfo:', fileInfo);
            // Upload has successfully completed and a file is ready.
          })
          .fail(function (errorType, fileInfo, error) {
            console.log('🚀 ~ file: AddPosts.vue:69 ~ error:', error);
            // Upload failed, or something else went wrong, a file is not ready.

            // `errorType: string` - Indicates the reason or location of the error, e.g. `info`, `baddata` etc.
            // `fileInfo: FileInfo` - File info object if known. Could be undefined.
            // `error: XMLHttpRequest | { message: string; code: string }` - The error response from the server or XMLHttpRequest instance that threw the error. Could be undefined.

            // See the list of all the possible error codes and it's messages:
            // https://uploadcare.com/api-refs/upload-api/#tag/Errors

            // `error` will be the instance of XMLHttpRequest in case when it's network error
            // here is example of how to check it
            const isNetworkError = error && 'readyState' in error;
          });
      });
      console.log(file, 'zxc');
    });
    console.log('🚀 ~ file: AddPosts.vue:86 ~ awaitwidget.onChange ~ e:', e);
  },
  methods: {
    ...mapActions({}),
    async handleSubmit(fileData) {
      this.isLoading = true;
      if (!(fileData?.target?.files?.length > 0)) return;
      const filesUpload = fileData?.target?.files;
      const lengthFiles = filesUpload.length;
      for (let index = 0; index < lengthFiles; index++) {
        const file = filesUpload[index];
        const result = await uploadFile(file, {
          publicKey: import.meta.env.VITE_API_UPLOADCARE ?? process.env.VITE_API_UPLOADCARE,
          store: 'auto',
        });
        if (result) {
          this.dataUpload.push(result.cdnUrl);
        }
      }
      console.log(this.dataUpload, 'result');
      this.isLoading = false;
    },
    installWidgetPreviewMultiple(widget, list) {
      widget.onChange((fileGroup) => {
        list.empty();
        // if (fileGroup) {
        //   $.when.apply(null, fileGroup.files()).done(function () {
        //     $.each(arguments, function (i, fileInfo) {
        //       const src = fileInfo.cdnUrl + '-/scale_crop/160x160/center/';

        //       list.append($('<div/>', { class: 'block-img' }).append([$('<img/>', { src: src }), fileInfo.name]));
        //     });
        //   });
        // }
      });
    },
    // preview before upload
  },
};
</script>

<style lang="less">
.bg-white {
  background: white;
}
.post {
  height: 100vh;
}
</style>
