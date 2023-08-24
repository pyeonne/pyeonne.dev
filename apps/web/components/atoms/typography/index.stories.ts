import { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const roleOptions = [
  'DISPLAY_LARGE',
  'DISPLAY_MEDIUM',
  'DISPLAY_SMALL',
  'HEADLINE_LARGE',
  'HEADLINE_MEDIUM',
  'HEADLINE_SMALL',
  'TITLE_LARGE',
  'TITLE_MEDIUM',
  'TITLE_SMALL',
  'LABEL_LARGE',
  'LABEL_MEDIUM',
  'LABEL_SMALL',
  'BODY_LARGE',
  'BODY_MEDIUM',
  'BODY_SMALL',
]

const fontWeightOptions = [
  'EXTRALIGHT',
  'LIGHT',
  'NORMAL',
  'MEDIUM',
  'SEMIBOLD',
  'BOLD',
  'EXTRABOLD',
  'BLACK',
]

const alignOptions = ['INHERIT', 'LEFT', 'CENTER', 'RIGHT', 'JUSTIFY']

const displayOptions = ['initial', 'block', 'inline', 'inline-block']

const meta = {
  title: 'Components/Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the component.',
    },
    role: {
      control: {
        type: 'select',
      },
      options: roleOptions,
    },
    fontWeight: {
      control: {
        type: 'select',
      },
      options: fontWeightOptions,
    },
    align: {
      control: {
        type: 'select',
      },
      options: alignOptions,
    },
    component: {
      table: {
        disable: true,
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    display: {
      control: {
        type: 'select',
      },
      options: displayOptions,
    },
    gutterBottom: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    noWrap: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const DisplayLarge: Story = {
  args: {
    children: 'Display large',
    role: 'DISPLAY_LARGE',
    fontWeight: 'NORMAL',
    align: 'LEFT',
  },
}

export const DisplayMedium: Story = {
  args: {
    children: 'Display medium',
    role: 'DISPLAY_MEDIUM',
    fontWeight: 'NORMAL',
  },
}

export const DisplaySmall: Story = {
  args: {
    children: 'Display small',
    role: 'DISPLAY_SMALL',
    fontWeight: 'NORMAL',
  },
}

export const HeadlineLarge: Story = {
  args: {
    children: 'Headline large',
    role: 'HEADLINE_LARGE',
    fontWeight: 'NORMAL',
  },
}

export const HeadlineMedium: Story = {
  args: {
    children: 'Headline medium',
    role: 'HEADLINE_MEDIUM',
    fontWeight: 'NORMAL',
  },
}

export const HeadlineSmall: Story = {
  args: {
    children: 'Headline small',
    role: 'HEADLINE_SMALL',
    fontWeight: 'NORMAL',
  },
}

export const TitleLarge: Story = {
  args: {
    children: 'Title large',
    role: 'TITLE_LARGE',
    fontWeight: 'NORMAL',
  },
}

export const TitleMedium: Story = {
  args: {
    children: 'Title medium',
    role: 'TITLE_MEDIUM',
    fontWeight: 'MEDIUM',
  },
}

export const TitleSmall: Story = {
  args: {
    children: 'Title small',
    role: 'TITLE_SMALL',
    fontWeight: 'MEDIUM',
  },
}

export const LabelLarge: Story = {
  args: {
    children: 'Label large',
    role: 'LABEL_LARGE',
    fontWeight: 'MEDIUM',
  },
}

export const LabelMedium: Story = {
  args: {
    children: 'Label medium',
    role: 'LABEL_MEDIUM',
    fontWeight: 'MEDIUM',
  },
}

export const LabelSmall: Story = {
  args: {
    children: 'Label small',
    role: 'LABEL_SMALL',
    fontWeight: 'MEDIUM',
  },
}

export const BodyLarge: Story = {
  args: {
    children: 'Body large',
    role: 'BODY_LARGE',
    fontWeight: 'NORMAL',
  },
}

export const BodyMedium: Story = {
  args: {
    children: 'Body medium',
    role: 'BODY_MEDIUM',
    fontWeight: 'NORMAL',
  },
}

export const BodySmall: Story = {
  args: {
    children: 'Body small',
    role: 'BODY_SMALL',
    fontWeight: 'NORMAL',
  },
}
