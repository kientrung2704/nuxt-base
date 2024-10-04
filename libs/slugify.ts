import slugify from 'slugify'
import { removeAccents } from "~/libs/common";

export function createSlug (text = '') {
  return slugify(removeAccents(text),
    {
      remove: /[*+~#$%.()'"!:@]/g,
      lower: true,
      strict: true
    }
  )
}