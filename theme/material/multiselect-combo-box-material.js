import '@polymer/polymer/lib/elements/custom-style';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML =
`
<custom-style>
  <style>
    html {
      /* Spacing */
      --material-space-xs: 0.25rem;
      --material-space-s: 0.5rem;

      /* Sizing */
      --material-size-m: 2.25rem;

      /* Border radius */
      --material-border-radius: 1.25em;

      /* Line heights */
      --material-line-height-xs: 1.25;

      /* Icons */
      --material-icon-size-m: 1.5em;
    }
  </style>
</custom-style>
`;
document.head.appendChild($_documentContainer.content);