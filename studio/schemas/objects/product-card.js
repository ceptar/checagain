import { Gift } from 'phosphor-react'

export default {
  title: 'Product Card',
  name: 'productCard',
  type: 'object',
  icon: Gift,
  fields: [
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [{ type: 'product' }]
    },
    {
      title: 'Shape',
      name: 'shape',
      type: 'string'

      },
    {
      title: 'Color',
      name: 'color',
      type: 'string'

    },
  ],

  preview: {
    select: {
        title: 'product.title',
        shape: 'product.idshape',
        color: 'product.idcolor',
    },
    prepare({ title, shape, color }) {
        return {
            title: title || 'Product Card',
            subtitle: `Shape: ${shape || 'N/A'}, Color: ${color || 'N/A'}`,
        };
    }
}
}
  
//   preview: {
//     select: {
//       title: 'product.title'
//     },
//     prepare({ title }) {
//       return {
//         title: title || 'Product Card'
//       }
//     }
//   }
// }
