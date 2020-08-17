import { background, font, input } from "../variables";
import { TextBox, TextBoxVertical } from "./textbox";
import { DatePickerType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Date Picker

    Default Class For Mendix Date Picker Widget
========================================================================== */
export const DatePicker: DatePickerType = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container,
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
      ...TextBox.containerDisabled
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...TextBox.label,
    },
    labelDisabled: {
        // All TextStyle properties are allowed
      ...TextBox.labelDisabled
    },
    pickerIOS: {
        // All ViewStyle properties & "color" (type: string) are allowed
        backgroundColor: background.primary,
        color: font.color,
    },
    pickerBackdropIOS: {
        // All ViewStyle properties are allowed
    },
    pickerTopIOS: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary,
    },
    value: {
        // All TextStyle properties are allowed
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,

        fontSize: input.fontSize,
        fontFamily: font.family,
        borderWidth: input.borderWidth,
        borderRadius: input.borderRadius,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    valueDisabled: {
        // All TextStyle properties are allowed
        backgroundColor: input.disabledBackgroundColor,
        color: TextBox.inputDisabled?.color
    },
    placeholder: {
        // All TextStyle properties are allowed
        color: input.placeholderTextColor,
    },
    placeholderDisabled: {
        // All TextStyle properties are allowed
        color: TextBox.inputDisabled?.color
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
    },
};
export const DatePickerVertical: DatePickerType = {
    container: TextBoxVertical.container,
    label: TextBoxVertical.label,
    value: {
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,

        fontSize: input.fontSize,
        fontFamily: font.family,
        borderRadius: input.borderRadius,
        borderWidth: input.borderWidth,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    placeholder: {
        color: input.placeholderTextColor,
    },
    validationMessage: TextBoxVertical.validationMessage,
};
