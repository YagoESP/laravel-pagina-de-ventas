import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export let renderCkeditor = () => {

  let editors = document.querySelectorAll(".editor");

  editors.forEach( editor => {

    ClassicEditor.create(editor)

    .then( editor => {
    window.editor = editor;
    })
    .catch( error => {
    console.error( 'There was a problem initializing the editor.', error );
    });
  })

}
