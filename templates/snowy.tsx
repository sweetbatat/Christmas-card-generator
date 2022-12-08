import type { TemplateParams } from "../pages/api/card";

export default ({ content }: TemplateParams) => (
  <div
    tw='bg-blue-200'
    style={{
      display: 'flex',
      fontSize: 128,
      width: '100%',
      height: '100%',
    }}
  >
    {content}
  </div>
)