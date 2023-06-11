import React, { useState } from 'react';
import NextLink from 'next/link';
import {
  Collapse,
  Typography,
  Box,
  Grid,
  GridItem,
  Icon,
  Spacer,
  styled,
  useTheme,
} from '@x/x'; // Sensitive information hidden.
import { clsx } from 'clsx';
import Button from '~/components/Button';
import Theme from '~/theme/x/x'; // Sensitive information hidden.
import type { VirtualSupportProps } from './VirtualSupport.types';
import styles from './VirtualSupport.css';
import InfoButton from '~/components/InfoButton';

const VirtualSupport = ({
  className,
  data,
  open = false,
  disableToggle = false,
  buttonCloseLabel = 'Close help options',
  buttonOpenLabel = 'Open help options',
  fullWidth = false,
}: VirtualSupportProps) => {
  const theme = useTheme<typeof Theme>();
  const [isOpen, setIsOpen] = useState(open);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box className={clsx('comp-virtual-support', className)}>
      {!disableToggle && (
        <Button size="small" color="primary" onClick={handleClick}>
          {isOpen ? buttonCloseLabel : buttonOpenLabel}
        </Button>
      )}
      <Collapse in={disableToggle ? true : isOpen}>
        {!disableToggle && <Spacer height={theme.tokens.spacing.md} />}
        <Grid spacing={5} justifyContent="flex-start">
          {data.map((dataItem) => {
            return (
              <GridItem
                key={dataItem.title}
                xs={12}
                sm={fullWidth ? 6 : 12}
                md={fullWidth ? 3 : 6}
                className="comp-virtual-support__item"
              >
                <Grid direction="column" wrap="nowrap" sx={{ height: '100%' }}>
                  <GridItem>
                    <NextLink href={dataItem.websiteUrl}>
                      <Typography variant="h3" gutterBottom>
                        {dataItem.title}
                      </Typography>
                    </NextLink>
                  </GridItem>
                  <GridItem>
                    <Typography gutterBottom>{dataItem.description}</Typography>
                  </GridItem>
                  <GridItem>
                    <InfoButton
                      type="CALL"
                      url={`tel:${dataItem.phone}`}
                      linkText={dataItem.phone}
                    />
                    <InfoButton type="ZOOM" url={dataItem.zoomUrl} linkText="Connect" />
                    <Spacer height={theme.tokens.spacing.xxxs} />
                    <NextLink href={dataItem.websiteUrl} passHref legacyBehavior>
                      <Button
                        endIcon={<Icon className="comp-image-button__end-icon" name="launch" />}
                      >
                        Visit Website
                      </Button>
                    </NextLink>
                  </GridItem>
                </Grid>
              </GridItem>
            );
          })}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default styled(VirtualSupport)(styles);
