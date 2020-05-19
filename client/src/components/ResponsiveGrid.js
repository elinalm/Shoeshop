import React from "react";
import { Grid, ResponsiveContext } from "grommet";

const columnSize = {
    'small': ["auto"],
    'medium': ["auto", "auto", "auto"],
    'large': ["auto", "auto", "auto", "auto"],
    'xlarge': ["auto", "auto", "auto", "auto"]
};

const rowSize = {
    small: ["medium", "medium", "medium"],
    medium: ["medium", "medium"],
    large: ["medium"],
    xlarge: ["medium"]
};

export const ResponsiveGrid = ({
    ...props
}) => (
        <ResponsiveContext.Consumer>
            {size => {
                let columnsVal = columnSize.small;
                if (columnSize) {
                    switch (size) {
                        case 'small': columnsVal = columnSize.small
                            break;
                        case 'medium': columnsVal = columnSize.medium
                            break;
                        case 'large': columnsVal = columnSize.large
                            break;
                        case 'xlarge': columnsVal = columnSize.xlarge
                            break;
                        default: columnsVal = columnSize.medium
                    }
                }

                let rowsVal = rowSize.small;
                if (rowSize) {
                    switch (size) {
                        case 'small': rowsVal = rowSize.small
                            break;
                        case 'medium': rowsVal = rowSize.medium
                            break;
                        case 'large': rowsVal = rowSize.large
                            break;
                        case 'xlarge': rowsVal = rowSize.xlarge
                            break;
                        default: rowsVal = rowSize.medium
                    }
                }

                return (
                    <Grid

                        {...props}

                        rows={!rowsVal ? size : rowsVal}
                        columns={!columnsVal ? size : columnsVal}
                    >

                    </Grid>
                );
            }}
        </ResponsiveContext.Consumer>
    );
