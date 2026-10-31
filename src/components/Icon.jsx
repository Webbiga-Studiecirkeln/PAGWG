import {
    BookOpenIcon,
    AcademicCapIcon,
    CalendarIcon,
    CodeBracketIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/outline";

const icons = {
    BookOpenIcon,
    AcademicCapIcon,
    CalendarIcon,
    CodeBracketIcon,
    DocumentTextIcon,
};

function Icon({ icon }) {
    const IconComponent = icons[icon];

    if (!IconComponent) return null;

    return <IconComponent />;
}

export default Icon;