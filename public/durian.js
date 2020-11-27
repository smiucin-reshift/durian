<script>
window.location = /.*redirect=([^&]*).*/.exec(document.location.href)[1];
window.parent.postMessage(userName, '*');
</script>
