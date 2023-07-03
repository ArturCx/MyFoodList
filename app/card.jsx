import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function CardPinto(props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" maw={500} bg="#2B2B2B">
      <Card.Section>
        <Image
          src={props.image}
          height={160}
        />
      </Card.Section>

      <Group position="center" mt="md" mb="xs">
        <Text weight={700} color='yellow'>{props.name}</Text>
        <Badge color="red" variant="light" display={props.showbadge}>
          {props.badge}
        </Badge>
      </Group>

      <Group position="center" mt="md" mb="xs">
        <Text size="15px" color='white'>{props.text}</Text>
      </Group>

      <Group position="center">
        <Text size="xs" color='white'>{props.text2}</Text>
      </Group>

      <Group position="center" mt="md">
        <Button component="a" href={props.site} color="yellow" >
          Abrir Site
        </Button>
      </Group>

    </Card>
  );
}