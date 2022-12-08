import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og'
import snowy from '../../templates/snowy';

export interface TemplateParams {
  content?: string;
}

export const config = {
  runtime: 'experimental-edge',
}

const templates = {
  snowy
} as any;

export default (request: NextRequest) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const { content, template } = Object.fromEntries(params)

  const templateFn = templates[template];

  if (templateFn) {
    return new ImageResponse(templateFn({ content }))
  }
};
